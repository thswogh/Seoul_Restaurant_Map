package Sejong.Seoul_Restaurant_Map.controller;

import Sejong.Seoul_Restaurant_Map.domain.Member;
import Sejong.Seoul_Restaurant_Map.repository.MemberRepository;
import Sejong.Seoul_Restaurant_Map.service.joinUserService;
import Sejong.Seoul_Restaurant_Map.service.joinUserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class joinController {
    private final MemberRepository memberRepository;
    private final joinUserService joinService = new joinUserServiceImpl(memberRepository);

    @PostMapping(value = "/join")
    public boolean isValidId(@RequestParam("userId")String userId){
        return joinService.isValidId(userId);
    }
    @PostMapping(value = "/join")
    public boolean isValidName(@RequestParam("userName")String userName){
        return joinService.isValidId(userName);
    }
    @PostMapping(value = "/join")
    public boolean isValidEmail(@RequestParam("userEmail")String userEmail){
        return joinService.isValidId(userEmail);
    }




}
