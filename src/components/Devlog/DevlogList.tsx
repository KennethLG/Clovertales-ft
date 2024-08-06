"use client";

import { config } from "@/config";
import { useEffect, useState } from "react";
import LoadingCard from "../global/Loaders/LoadingCard";
import { PaginationControls } from "@/app/news/Pagination";
import { Task } from "@/domain/task";

type TasksListProps = {
  limit: string;
  withControls?: boolean;
  CardComponent: React.FC<any>;
};

export const DevlogList: React.FC<TasksListProps> = ({
  limit,
  withControls = false,
  CardComponent,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastKey, setLastKey] = useState<any>(null);
  const [previousKeys, setPreviousKeys] = useState<any[]>([]);

  const fetchTasks = async (key?: any) => {
    setIsLoading(true);
    setError(null);
    let url = `${config.aws.api}/task?limit=${limit}`;
    if (key) {
      url += `&startKey[id]=${key.id}&startKey[createdAt]=${key.createdAt}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("🚀 ~ fetchTasks ~ data:", data)
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch posts");
      }
      setTasks(data.items);
      setLastKey(data.lastEvaluatedKey);
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrevious = () => {
    const newPreviousKeys = [...previousKeys];
    newPreviousKeys.pop();
    const previousKey = newPreviousKeys[newPreviousKeys.length - 1] || null;
    setPreviousKeys(newPreviousKeys);
    fetchTasks(previousKey);
  };

  const handleNext = () => {
    if (lastKey && !previousKeys.includes(lastKey)) {
      setPreviousKeys([...previousKeys, lastKey]);
      fetchTasks(lastKey);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (error) return <div>{error}</div>;
  if (isLoading) return <LoadingCard />;

  return (
    <>
      {tasks.map((task, i) => (
        <CardComponent
          key={i}
          title={task.title}
          description={task.description}
          attachments={task.attachments}
          createdAt={task.createdAt}
          timing={task.timing}
          type={task.type}
          level={task.level}
          status={"done"}
        />
      ))}
      {withControls && (
        <PaginationControls
          hasPrevious={previousKeys.length > 0}
          hasNext={!!lastKey}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </>
  );
};
