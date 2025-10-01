import { useState, useEffect } from "react";

const mockData = [
  {
    id: 1,
    name: "John Doe",
    role: "UI/UX Designer",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Frontend Developer",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Backend Engineer",
    email: "michael@example.com",
  },
  {
    id: 4,
    name: "Amina Khan",
    role: "Product Manager",
    email: "amina@example.com",
  },
  {
    id: 5,
    name: "Luis Alvarez",
    role: "QA Engineer",
    email: "luis@example.com",
  },
];

export default function useMockApi(delay = 600) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { data, loading };
}
