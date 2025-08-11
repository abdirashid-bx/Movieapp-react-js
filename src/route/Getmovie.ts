const Getmovie = async () => {
  try {
    const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjA2OTI1ZTI0N2YyZmI4ZTdhOWFjMzE2MzVjNDkyNCIsIm5iZiI6MTc0MjUwMDUxMi4yMiwic3ViIjoiNjdkYzcyYTBmYWJhMTZiNWJkZjJjYjMxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.CfPwqyLa0ceAIGH6QL7WeOIjp7PZNwfwDrfIwzKs6Xg'
      }
    };
    const response = await fetch(url, options)
    const data = await response.json();
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export { Getmovie }


const Getsearch = async (query : string) => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjA2OTI1ZTI0N2YyZmI4ZTdhOWFjMzE2MzVjNDkyNCIsIm5iZiI6MTc0MjUwMDUxMi4yMiwic3ViIjoiNjdkYzcyYTBmYWJhMTZiNWJkZjJjYjMxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.CfPwqyLa0ceAIGH6QL7WeOIjp7PZNwfwDrfIwzKs6Xg'
      }
    };
 const Api=await fetch(url,options)
 const data=await Api.json();
  console.log("the data",data)
 return data
 

  } catch (error) {
console.log(error)
  }


}

export { Getsearch }

