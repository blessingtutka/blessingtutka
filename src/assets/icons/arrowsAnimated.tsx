import styled, { keyframes } from 'styled-components';

const move = keyframes`
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
`;

const pulse = keyframes`
  to {
    opacity: 1;
  }
`;

const Container = styled.a`
    position: relative;
    width: 85px;
    height: 85px;
    margin-top: auto;
`;

const Chevron = styled.div`
    position: absolute;
    width: 28px;
    height: 2px;
    left: 25px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: ${move} 3s ease-out infinite;

    &:first-child {
        animation-delay: 1s;
    }

    &:nth-child(2) {
        animation-delay: 2s;
    }

    &::before,
    &::after {
        content: ' ';
        position: absolute;
        top: 0;
        height: 100%;
        background: #fff;
    }

    &::before {
        left: 0;
        width: 51%;
        transform: skew(0deg, 30deg);
    }

    &::after {
        right: 0;
        width: 50%;
        transform: skew(0deg, -30deg);
    }
`;

const Text = styled.div`
    display: block;
    margin-top: 70px;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: 0.25;
    animation: ${pulse} 2s linear alternate infinite;
`;

const ArrowsAnimation = () => {
    return (
        <Container href='/#about'>
            <Chevron className='chevron' />
            <Chevron className='chevron' />
            <Chevron className='chevron' />
            <Text>Let's Start</Text>
        </Container>
    );
};

export default ArrowsAnimation;
