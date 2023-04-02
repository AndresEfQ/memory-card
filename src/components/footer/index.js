import { FaGithub } from "react-icons/fa";
import { StyledFooter, StyledA } from "./style";

export default function Footer() {
  return (
    <StyledFooter>Copyright © <StyledA href="https://github.com/AndresEfQ/memory-card">AndresEfQ 2023 <FaGithub size={20}/></StyledA></StyledFooter>
  )
}
