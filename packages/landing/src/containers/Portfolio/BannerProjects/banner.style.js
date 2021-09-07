import styled from 'styled-components';

const BannerWrapper = styled.section`
  position: relative;
  background-color: #f6d142;
  display: flex;
  align-items: center;
  padding-top: 80px;
  display: flex;
  align-items: center;
  @media (min-width: 991px) {
    min-height: 100vh;
  }

  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export default BannerWrapper;
