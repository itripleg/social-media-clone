import React from 'react'

function SidebarRow({ src, Icon, title }) {
	return (
		<div>
			{src && (
				<Image 
					src={src} 
					width={30} 
					height={30} 
					layout="fixed"
				/>
			)}
			{Icon && <Icon className="h-8 w-8 text-blue-500" />}
			<p className="hidden sm:inline-flex">{title}</p>
		</div>
	)
}

export default SidebarRow