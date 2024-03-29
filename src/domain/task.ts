type Attachment = {
  id: string;
  url: string;
}

export interface Task {
  id: string;
  createdAt: string;
  title: string;
  status: 'completed' | 'inProgress' | 'blocked';
  description?: string;
  attachments?: Attachment[]; // list of URLs
}