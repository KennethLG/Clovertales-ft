import { config } from "@/config"

const fetchTasks = async () => {
  const response = await fetch(`${config.aws.api}/task`, {
    next: {
      revalidate: config.time.day
    }
  });

  const tasks = await response.json();
  return tasks;
}

export const Devlog = async () => {

  const tasks = await fetchTasks();

  return (
    <>
    
    </>
  )
}