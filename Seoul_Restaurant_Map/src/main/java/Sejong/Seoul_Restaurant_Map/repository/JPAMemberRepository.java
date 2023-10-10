package Sejong.Seoul_Restaurant_Map.repository;


import Sejong.Seoul_Restaurant_Map.domain.Member;
import jakarta.persistence.EntityManager;

public class JPAMemberRepository implements MemberRepository{
    private final EntityManager em;

    public JPAMemberRepository(EntityManager em) {
        this.em = em;
    }

    public Member save(Member member){
        em.persist(member);
        return member;
    }
}
