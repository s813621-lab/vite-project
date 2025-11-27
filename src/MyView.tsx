import React from 'react';

interface Pet {
  id: number;
  title: string;
  name: string;
}

const pets: Pet[] = [
  { id: 101, title: "dog", name: "lucky" },
  { id: 102, title: "cat", name: "kitty" },
];

export const MyView: React.FC = () => {
  return (
    <div className="p-4 border rounded">
      <h3>Pet List</h3>
      <ul>
        {/* map 的正確語法 */}
        {pets.map((pet) => (
          <div key={pet.id} className="flex items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50">
            <span><h3 className="text-lg font-semibold text-gray-800"> {pet.title} </h3></span>
            <input className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" type="text" value={pet.name}/>
          </div>
        ))}
      </ul>
    </div>
  );
};
