import { setTrigger } from "@/redux/slices/triggerSlice";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const PopupDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #282727b7;
  box-shadow: 0 3px 5px 3px grey;
  display: flex;
  justify-content: center;

  transition: all 700ms ease;
  z-index: 110;
`;
const PopupIn = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 1rem;

  width: 45rem;
  background-color: #ffffff;

  height: 37rem;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 748px) {
    width: 100%;
    height: 100%;
    padding: unset;
  }
`;

const Popup = ({ children }) => {
  const dispatch = useDispatch();
  const trigger = useSelector((state) => state.trigger);
  return trigger ? (
    <PopupDiv>
      <PopupIn>
        <GrClose
          onClick={() => {
            dispatch(setTrigger());
          }}
          style={{
            fontSize: "1.4rem",
            cursor: "pointer",
            position: "absolute",
            top: "1rem",
            left: "1rem",
          }}
        />
        {children}
      </PopupIn>
    </PopupDiv>
  ) : null;
};

export default Popup;
