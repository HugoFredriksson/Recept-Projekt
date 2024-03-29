import { useEffect, useState } from 'react';

const useGetUserName = () => {
  const [userName, setUserName] = useState<string | null>(null);

  const getUserNameFetch = async () => {
    try {
      const path = 'https://projekt-recept20240315095654.azurewebsites.net/User/VerifyUserName';
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

      const fetchedUserName = await response.text();

      return fetchedUserName;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUserName = await getUserNameFetch();
      if (fetchedUserName !== null) {
        setUserName(fetchedUserName);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (userName !== null) {
      
    }
  }, [userName]);

  return userName;
};

export default useGetUserName;