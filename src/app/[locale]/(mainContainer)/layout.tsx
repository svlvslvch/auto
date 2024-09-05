import MainContainer from '@components/MainContainer/MainContainer';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainContainer>
      <div className="relative pb-10 pt-8">{children}</div>
    </MainContainer>
  );
}
