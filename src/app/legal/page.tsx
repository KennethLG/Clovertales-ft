import { config } from "@/config";
import fetch from "node-fetch";

const fetchLegalDocument = async () => {
  const response = await fetch(`${config.aws.cdn}/legal.html`);

  const legalDocument = await response.text();
  return legalDocument;
};

const Legal = async () => {
  const legalDocument = await fetchLegalDocument();
  console.log("document", legalDocument);

  return <div dangerouslySetInnerHTML={{ __html: legalDocument }} />;
};

export default Legal;
