package Sejong.Seoul_Restaurant_Map.repository;

import Sejong.Seoul_Restaurant_Map.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, String> {

    boolean existsByUser_email(String email);
    boolean existsByUser_name(String name);
}