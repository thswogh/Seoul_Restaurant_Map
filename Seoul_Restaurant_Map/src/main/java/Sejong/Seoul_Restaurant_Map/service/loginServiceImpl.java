package Sejong.Seoul_Restaurant_Map.service;

import Sejong.Seoul_Restaurant_Map.domain.LoginState;
import Sejong.Seoul_Restaurant_Map.domain.Member;
import Sejong.Seoul_Restaurant_Map.repository.MemberRepository;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@RequiredArgsConstructor
public class loginServiceImpl implements loginService{

    private final MemberRepository memberRepository;
    @Override
    public LoginState checkError(String id, String password) {
        Optional<Member> find = memberRepository.findById(id);

        if (find.isEmpty())
            return LoginState.ID_ERROR;

        Member member = find.get();
        if (member.getUser_password().equals(password))
            return LoginState.NO_ERROR;

        return LoginState.PASSWORD_ERROR;
    }
}
