
interface Props {
    countCartItems: number;

}
const NavBar = ({countCartItems}: Props) => {
  return (
    <div>NavBar {countCartItems}</div>
  )
}

export default NavBar