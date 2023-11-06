package Sejong.Seoul_Restaurant_Map.service;

import Sejong.Seoul_Restaurant_Map.domain.LoginState;

public interface loginService {
    LoginState checkError(String id, String password);
}
