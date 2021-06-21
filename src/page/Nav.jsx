import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #eee;
`;

export default function Nav() {
  return (
    <Container>
      <h2>TodoList</h2>
    </Container>
  );
}
