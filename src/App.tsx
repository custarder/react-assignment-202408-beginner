import { useEffect, useState } from "react"
import Card from "./components/card"
import Spinner from "./components/Spinner"

type User = {
  id: number
  username: string
  name: string
  email: string
  phone: string
  website: string
  address: { street: string, suite: string, city:string, zipcode:string }
  company: { name: string }
}

export default function App() {
	const [users, setUsers] = useState<User[]>([])
	const [isLoading, setIsLoading] = useState(true)


	const fetchUsers = async (): Promise<User[] | null> =>{
		const url = "https://jsonplaceholder.typicode.com/users"
		const res = await fetch(url)
		if (!res.ok) throw new Error(`error status: ${res.status}`)
		return res.json()
	}

	useEffect(() => {
		setIsLoading(true)
		let isMounted = true

		fetchUsers()
			.then((data) => {
				if (isMounted && data) setUsers(data)
			})
			.catch((err) => {
				console.error(err)
			})
			.finally(() => {
				if (isMounted) setIsLoading(false)
			})

		return () => { isMounted = false }
	},[])

	return (
		<div className="mt-5 flex flex-col gap-5 w-[80%] mx-auto">
			{ isLoading ? (
				<Spinner />
			) : (
				users.map((u) => 
					<Card
						key={u.username}
						name={u.name} 
						email={u.email} 
						phone={u.phone} 
						company={u.company} 
						web={u.website} 
						address={u.address} 
					/>
				))
			}
		</div>
	)
}