
package Sejong.Seoul_Restaurant_Map.service;

import Sejong.Seoul_Restaurant_Map.domain.Member;
import Sejong.Seoul_Restaurant_Map.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service("createNewMember")
@Transactional
@RequiredArgsConstructor
public class userService {

    private final MemberRepository memberRepository;
    public void saveNewMember(String username, String email, String password) {
        Member member = new Member();
        member.setUser_name(username);
        member.setUser_email(email);
        // 이메일 겹치면 불가.
        member.setUser_password(password);
        memberRepository.save(member);
    }
}
