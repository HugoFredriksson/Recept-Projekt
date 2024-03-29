import { useEffect, useState } from 'react';

const useGetRole = () => {
  const [userRole, setUserRole] = useState<string | null>(null);

  const getUserRoleFetch = async () => {
    try {
      const path = 'https://projekt-recept20240315095654.azurewebsites.net/User/VerifyRole';
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

      const fetchedUserRole = await response.text();

      return fetchedUserRole;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUserRole = await getUserRoleFetch();
      if (fetchedUserRole !== null) {
        setUserRole(fetchedUserRole);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (userRole !== null) {
      
    }
  }, [userRole]);

  return userRole;
};

export default useGetRole;
