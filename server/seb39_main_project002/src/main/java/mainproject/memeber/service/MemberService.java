package mainproject.memeber.service;

import mainproject.auth.utils.CustomAuthorityUtils;
import mainproject.exception.BusinessLogicException;
import mainproject.exception.ExceptionCode;
import mainproject.memeber.entity.Member;
import mainproject.memeber.repository.MemberRepository;

import org.springframework.context.ApplicationEventPublisher;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class MemberService {


        private final MemberRepository memberRepository;
        private final ApplicationEventPublisher publisher;

      // (1) 추가
        private final PasswordEncoder passwordEncoder;
        private final CustomAuthorityUtils authorityUtils;

      // (2) 생성자 DI용 파라미터 추가
      public MemberService(MemberRepository memberRepository,
                           PasswordEncoder passwordEncoder,
                           ApplicationEventPublisher publisher,
                           CustomAuthorityUtils authorityUtils) {
          this.memberRepository = memberRepository;
          this.passwordEncoder = passwordEncoder;
          this.publisher = publisher;
          this.authorityUtils = authorityUtils;
      }


//        @Transactional(readOnly = true)
        public Member createMember(Member member) {
            verifyExistsEmail(member.getEmail());

            // (3) 추가: Password 암호화
            String encryptedPassword = passwordEncoder.encode(member.getPassword());
            member.setPassword(encryptedPassword);

            // (4) 추가: DB에 User Role 저장
            List<String> roles = authorityUtils.createRoles(member.getEmail());
            member.setRoles(roles);

            Member savedMember = memberRepository.save(member);
            return savedMember;
        }


        @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
        public Member updateMember(Member member) {
            Member findMember = findVerifiedMember(member.getMemberId());

            Optional.ofNullable(member.getName())
                    .ifPresent(name -> findMember.setName(name));
            return memberRepository.save(findMember);
        }


        @Transactional(readOnly = true)
        public Member findMember(long memberId) {
            return findVerifiedMember(memberId);
        }

        public void deleteMember(long memberId) {
            Member findMember = findVerifiedMember(memberId);

            memberRepository.delete(findMember);
        }

        @Transactional(readOnly = true)
        public Member findVerifiedMember(long memberId) {
            Optional<Member> optionalMember =
                    memberRepository.findById(memberId);
            Member findMember =
                    optionalMember.orElseThrow(() ->
                            new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
            return findMember;
        }

        private void verifyExistsEmail(String email) {
            Optional<Member> member = memberRepository.findByEmail(email);
            if (member.isPresent())
                throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }