import styled from "styled-components";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function ErrorPage() {
  throw new Error("This is an error");
  return (
    <LoginLayout>
      <Heading as="h4">This is a dummy error page</Heading>
    </LoginLayout>
  );
}

export default ErrorPage;
