import { useRouter } from 'next/router';

export default function Discover() {
  const router = useRouter();
  const city = router.query.city;
  return (
    <h1>Estabelecimentos de {city}</h1>
  )
}