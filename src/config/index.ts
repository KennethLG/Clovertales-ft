export const config = {
  aws: {
    cdn: `${process.env.NEXT_PUBLIC_AWS_CDN}/resources`,
    api: `${process.env.NEXT_PUBLIC_AWS_API_URL}`,
  },
  time: {
    day: 86400,
    hour: 3600
  },
};
