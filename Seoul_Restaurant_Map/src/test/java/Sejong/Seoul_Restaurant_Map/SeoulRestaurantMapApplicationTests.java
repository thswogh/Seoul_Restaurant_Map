package Sejong.Seoul_Restaurant_Map;

import Sejong.Seoul_Restaurant_Map.domain.Member;
import Sejong.Seoul_Restaurant_Map.repository.MemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SeoulRestaurantMapApplicationTests {
	private final MemberRepository memberRepository;
	@Autowired
	public SeoulRestaurantMapApplicationTests(MemberRepository memberRepository) {
		this.memberRepository = memberRepository;
	}
	@Test
	void 회원가입() {
		Member member = new Member();
		member.setUser_name("chiwon");
		member.setUser_email("dh5277@naver.com");
		memberRepository.save(member);

		Member findMember = memberRepository.findById(member.getUser_id()).get();
		Assertions.assertThat(member.getUser_name()).isEqualTo(findMember.getUser_name());
	}


}

