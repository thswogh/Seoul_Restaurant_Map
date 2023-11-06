package Sejong.Seoul_Restaurant_Map.service;

import Sejong.Seoul_Restaurant_Map.domain.Member;
import Sejong.Seoul_Restaurant_Map.repository.MemberRepository;
import lombok.RequiredArgsConstructor;

import java.util.Optional;


@RequiredArgsConstructor
public class joinUserServiceImpl implements joinUserService{

    private final MemberRepository memberRepository;
    @Override
    public boolean isValidId(String id) {
        Optional<Member> find =  memberRepository.findById(id);
        if (find.isEmpty())
            return true;
        return false;
    }
    @Override
    public boolean isValidEmail(String email) {
        if (!memberRepository.existsByUser_email(email))
            return true;
        return false;
    }

    @Override
    public boolean isValidNickname(String nickname) {
        if (!memberRepository.existsByUser_name(nickname))
            return true;
        return false;
    }
    @Override
    public void joinNewUser(String id, String name, String email, String password) {
        Member member = new Member();
        member.setUser_id(id);
        member.setUser_name(name);
        member.setUser_email(email);
        member.setUser_password(password);
        memberRepository.save(member);
    }
}
