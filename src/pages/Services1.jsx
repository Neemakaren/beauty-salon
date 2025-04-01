import {useEffect} from 'react'
import { fetchData } from '../utils/data';

const Services1 = ({ setExercises, exercises, bodyPart }) => {

    useEffect(() => {
      const fetchExercisesData = async () => {
        let exercisesData = [];

        if (bodyPart === "all") {
          exercisesData = await fetchData(
            // "https://exercisedb.p.rapidapi.com/exercises",
            "./products.json"
          );
        } else {
          exercisesData = await fetchData(
            `./products.json/${bodyPart}`,
            exerciseOptions
          );
        }

        setExercises(exercisesData);
      };

      fetchExercisesData();
    }, [bodyPart]);
  
  return <div>
     {exercises.slice(0,10).map((item, id) => (
            <div key={id} className="">
              
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold text-[1em] text-center">
                  {item.name}
                  
                </p>
                <span className="opacity-50 text-[1.1em]">$20 / 50ml</span>
                <div className="flex gap-3 my-2">
                  <button className="bg-[#6B0606] text-white px-2">50ml</button>
                  <button className="bg-[#6B0606] text-white px-2">70ml</button>
                </div>
              </div>
            </div>
          ))}
  </div>;
};

export default Services1