import styled from "styled-components"
import { AiOutlineLoading3Quarters } from "@react-icons/all-files/ai/AiOutlineLoading3Quarters"
import { quaternary } from "../../../styles/colors"

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 4rem;
  right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`
export const Icon = styled(AiOutlineLoading3Quarters)`
  color: ${quaternary};
  animation: spin 1s linear infinite;
  font-size: 3rem;
  line-height: 2rem;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
