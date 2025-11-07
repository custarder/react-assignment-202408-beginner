type CardProps = {
  name: string
  email: string
  phone: string
  company: { name: string }
  web: string
  address: { street: string, suite: string, city:string, zipcode:string }
}

export default function Card({name, email, phone, company, web, address}: CardProps) {
	return (
		<div className="flex bg-white shadow-lg overflow-hidden">
			<div className="w-[30%] flex items-center justify-center p-4">
				<img
					src={`https://api.dicebear.com/9.x/personas/svg?seed=${name}`}
					alt="avatar"
					className="w-[85%] h-[85%] object-cover bg-gray-200"
				/>
			</div>

			<div className="w-[70%] flex flex-col justify-center p-4">
				<div className="pb-3">
					<p className="text-4xl font-semibold">{name}</p>
				</div>

				<div className="space-y-1 text-m">
					<p><strong>Email:</strong>{email}</p>
					<p><strong>Phone:</strong>{phone}</p>
					<p><strong>Company:</strong>{company.name}</p>
					<p><strong>Website:</strong>{web}</p>
					<p><strong>Address:</strong>{address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
				</div>
			</div>
		</div>
	)
}