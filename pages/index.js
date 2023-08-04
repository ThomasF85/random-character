import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  console.log(data);
  return (
    <>
      <h1>Hello {data.firstName}</h1>
      <p>
        Homepage of {data.firstName} {data.lastName}
      </p>
    </>
  );
}
