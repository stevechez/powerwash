import type { NextPage } from 'next';

const PrivacyPolicy: NextPage = () => {
	return (
		<>
			<div className="container w-full px-8 md:w-4/5 mx-auto py-10">
				<h1 className="text-4xl tracking-wide font-black text-blue-950 text-center mb-8">
					Privacy Policy
				</h1>
				<p className="text-lg mb-4">
					This Privacy Policy outlines the types of personal information that A
					Shine On Windows, a window cleaning business, collects from its
					customers, how it uses this information, and how it is protected. This
					policy applies to all customers who interact with A Shine On Windows
					and its website.
				</p>
				<h4 className="text-xl mb-4">Information Collection</h4>
				<p className="text-lg mb-4">
					A Shine On Windows may collect the following personal information from
					its customers:
				</p>
				<ul className="text-lg my-4">
					<li>Name</li>
					<li>Email address</li>
					<li>Phone number</li>
					<li>Mailing address</li>
					<li>Payment information (credit card number, billing address)</li>
				</ul>
				<p className="text-lg mb-4">
					This information is collected through our website, phone, or in-person
					meetings.
				</p>
				<h4 className="text-xl mb-4">Use of Information</h4>
				<p className="text-lg mb-4">
					The personal information collected by A Shine On Windows is used for
					the following purposes:
				</p>
				<ul className="text-lg my-4">
					<li>To provide window cleaning services to customers</li>
					<li>
						To communicate with customers regarding their window cleaning
						services
					</li>
					<li>To process payments for services rendered</li>
					<li>To send promotional offers and updates about our services</li>
				</ul>
				<h4 className="text-xl mb-4">Information Sharing</h4>
				<p className="text-lg mb-4">
					A Shine On Windows does not sell or share personal information
					collected from its customers with any third parties, except as
					required by law or to facilitate payment processing. We may share
					personal information with third-party service providers who help us
					provide our services, such as scheduling software providers or payment
					processors. These third-party providers are required to comply with
					privacy and security standards and are prohibited from using personal
					information for any purpose other than providing services to A Shine
					On Windows.
				</p>
				<h4 className="text-xl mb-4">Security Measures</h4>
				<p className="text-lg mb-4">
					A Shine On Windows takes reasonable measures to protect the personal
					information of its customers. We use secure servers to store and
					transmit personal information and restrict access to this information
					to authorized personnel only. We use SSL encryption for online
					transactions and adhere to industry-standard security practices to
					protect against unauthorized access, use, alteration, or disclosure of
					personal information.
				</p>
				<h4 className="text-xl mb-4">Your Rights</h4>
				<p className="text-lg mb-4">
					Customers have the right to access, modify, or delete their personal
					information collected by A Shine On Windows. To do so, please contact
					us at 650-793-8244. We will make reasonable efforts to comply with
					such requests in a timely manner.
				</p>
				<h4 className="text-xl mb-4">Changes to the Privacy Policy</h4>{' '}
				<p className="text-lg mb-4">
					A Shine On Windows reserves the right to modify this Privacy Policy at
					any time. Any changes to the policy will be posted on our website and
					will take effect immediately upon posting.
				</p>
				<h4 className="text-xl mb-4">Contact Us</h4>
				<p className="text-lg mb-4">
					If you have any questions or concerns about this Privacy Policy,
					please contact us at PO Box 7455, Aptos, CA.
				</p>
			</div>
		</>
	);
};

export default PrivacyPolicy;
