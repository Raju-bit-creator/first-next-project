import User from "@/components/user/page";

export default async function Userlist() {
    // Fetch data directly in the component
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    return (
        <div>
            <h3>User List</h3>
            <ul>
                {data.map((user: any) => (
                    <li key={user.id}><User  user={user}/></li>
                ))}
            </ul>
        </div>
    );
}