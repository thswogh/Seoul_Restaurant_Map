package Sejong.Seoul_Restaurant_Map.controller;

import Sejong.Seoul_Restaurant_Map.repository.MemberRepository;
import Sejong.Seoul_Restaurant_Map.service.joinUserService;
import Sejong.Seoul_Restaurant_Map.service.joinUserServiceImpl;
import Sejong.Seoul_Restaurant_Map.service.loginService;
import Sejong.Seoul_Restaurant_Map.service.loginServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class loginController {
    private final MemberRepository memberRepository;
    private final loginService _loginService = new loginServiceImpl(memberRepository);




}
