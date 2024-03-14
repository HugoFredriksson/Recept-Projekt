import { useEffect, useState } from 'react';

const useGetUserId = () => {
  const [userId, setUserId] = useState<number | null>(null);

  const getUserIdFetch = async () => {
    try {
      const path = 'https://localhost:7118/User/VerifyUserId';
      const response = await fetch(path, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('GUID') || ''
        }
      });

      if (!response.ok) {
        console.error(`Error: ${response.status}`);
        return null;
      }

      const userId = parseInt(await response.text(), 10);

      return userId;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUserId = await getUserIdFetch();
      if (fetchedUserId !== null) {
        setUserId(fetchedUserId);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    if (userId !== null) {
      console.log('UserId:', userId);
    }
  }, [userId]); 

  return userId;
};

export default useGetUserId;