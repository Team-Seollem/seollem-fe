import useSignIn from '@components/SignIn/hook/useSignIn';
import { Button } from '@components/common';
import styled from 'styled-components';

const logoImg = new URL('../../assets/landing/logo.png', import.meta.url).href;
const libraryImg = new URL(
  '../../assets/landing/librarypage.png',
  import.meta.url
).href;
const bookdetailImg = new URL(
  '../../assets/landing/bookdetail.png',
  import.meta.url
).href;
const memobookImg = new URL(
  '../../assets/landing/memobookdetail.png',
  import.meta.url
).href;
const memberMemoImg = new URL(
  '../../assets/landing/memberMemo.png',
  import.meta.url
).href;

export default function ServiceInfo() {
  const { guestSignIn } = useSignIn();
  return (
    <Wrapper>
      <Img src={logoImg} alt="service-logo" />

      <SButton
        type="button"
        styleType="solidPositive"
        size="medium"
        onClick={guestSignIn}
      >
        서비스 체험하기
      </SButton>
      <FeatureWrapper>
        <Title>
          검색한 책을 나만의 서재에 <br />
          등록할 수 있어요
        </Title>
        <SubTitle>
          읽고 싶은 책, 읽고 있는 책, 다 읽은 책 <br />
          세 가지 상태로 <br />
          책을 관리할 수 있어요
        </SubTitle>
        <Img src={libraryImg} alt="search-feature" />
      </FeatureWrapper>
      <FeatureWrapper>
        <Title>독서 상태를 기록할 수 있어요</Title>
        <SubTitle>
          책을 읽기 시작 날짜, 종료 날짜, <br />
          책에 대한 별점, 현재 읽고 있는 페이지를 <br />
          기록할 수 있습니다
        </SubTitle>
        <Img src={bookdetailImg} alt="bookdetail-feature" />
      </FeatureWrapper>
      <FeatureWrapper>
        <Title>
          책을 읽으면서 남긴 메모를 <br />
          특별하게 모아볼 수 있어요
        </Title>
        <SubTitle>
          배경 이미지를 선택해서 <br />
          메모를 조회할 수 있어요. <br />
          메모를 이미지 파일로 저장할 수도 있습니다
        </SubTitle>
        <Img src={memobookImg} alt="memobook-feature" />
      </FeatureWrapper>
      <FeatureWrapper>
        <Title>
          명예의 전당에서
          <br /> 다른 회원의 독서활동을 <br />
          확인할 수 있어요
        </Title>
        <SubTitle>
          다른 회원의 서재를 조회할 수 있어요 <br />
          마음에 드는 메모를 발견하면 <br />
          좋아요를 남겨보세요.
        </SubTitle>
        <Img src={memberMemoImg} alt="member-memo-feature" />
      </FeatureWrapper>
      <FeatureWrapper>
        <Title>
          나만의 작은 설렘 서비스와 함께
          <br /> 독서의 즐거움을 경험해 보세요
        </Title>
        <SButton
          type="button"
          styleType="solidPositive"
          size="medium"
          onClick={guestSignIn}
        >
          서비스 체험하기
        </SButton>
      </FeatureWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  margin-top: 2rem;
`;

const SButton = styled(Button)`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const FeatureWrapper = styled.div`
  margin: 2rem 0;
  width: 100%;
  text-align: center;
  line-height: 2.5rem;
  font-family: 'LINESeedKR-Bd';
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  line-height: 2.5rem;
  color: #545454;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 900;
  line-height: 2rem;
  color: ${({ theme }) => theme.color.gray02};
`;
