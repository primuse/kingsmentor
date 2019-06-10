import styled from 'styled-components';

const AvatarCont = styled.div`
  display: block;
  overflow: hidden;
  border: 2px solid #fff;
  border-radius: 100%;
  width: 34px;
  height: 34px;
  background: #e3e9ed;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 66%;
  z-index: 999;
  display: block;
  padding: 5px 8px;
  color: #fff;
  font-size: 1.2rem;
  letter-spacing: .2px;
  white-space: nowrap;
  background: #15171a;
  border-radius: 3px;
  box-shadow: 0 12px 26px rgba(39,44,49,.08), 1px 3px 8px rgba(39,44,49,.03);
  opacity: 0;
  transition: all .5s ease;
  pointer-events: none;
`;

const Avatar = styled.img.attrs(props => ({
  src: props.src
}))`
  width: 34px;
`;

export { Avatar, AvatarCont, Tooltip };
