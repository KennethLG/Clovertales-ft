import { config } from "@/config"

const fetchLegalDocument = async () => {
  const response = await fetch(`${config.aws.api}`, {
    next: {
      revalidate: config.time.day
    }
  });

  const legalDocument = await response.json();
  return legalDocument;
}

const Legal = async () => {
  const legalDocument = await fetchLegalDocument();
  console.log(legalDocument);
}

export default Legal;