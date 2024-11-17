export default function Home() {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Education</h1>
            <ul className="space-y-4">
                <li className="bg-gray-100 p-4 rounded-lg shadow">
                    <strong className="text-lg">B.Tech CSE (AI-ML)</strong> <br />
                    Dr. A. P. J. Abdul Kalam Technical University, Lucknow, Uttar Pradesh (Sept 2021 - July 2025) <br />
                    <span className="text-gray-600">8.03 SGPA</span>
                </li>
                <li className="bg-gray-100 p-4 rounded-lg shadow">
                    <strong className="text-lg">Higher Secondary Certificate</strong> <br />
                    Govt. Co-Ed Senior Secondary School, Rohini, Delhi (April 2019 - July 2020) <br />
                    <span className="text-gray-600">89%</span>
                </li>
            </ul>

            <h1 className="text-3xl font-bold mt-8 mb-4">Experience</h1>
            <ul className="space-y-6">
                <li className="bg-white p-4 rounded-lg shadow border border-gray-200">
                    <strong className="text-lg">Full Stack Developer</strong> - HashedBit Innovations, Gurugram, India (Dec 2023 - Feb 2024) <br />
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Developed and maintained responsive, user-friendly web applications using React.js and Node.js.</li>
                        <li>Implemented RESTful APIs and backend logic to optimize data retrieval and security, leveraging JWT for user authentication.</li>
                        <li>Collaborated with cross-functional teams in an Agile environment to deliver high-quality software solutions on time.</li>
                        <li>Utilized MongoDB for efficient data management and storage solutions.</li>
                        <li>Enhanced application performance and reduced response time through optimized code practices and query tuning.</li>
                    </ul>
                </li>
                <li className="bg-white p-4 rounded-lg shadow border border-gray-200">
                    <strong className="text-lg">Full Stack Developer</strong> - Infenito Technology, Noida, India (Nov 2023 - Dec 2023) <br />
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Assisted in optimizing web applications and debugging backend services using Node.js and Express.js.</li>
                        <li>Implemented modular, reusable frontend components using React.js, improving overall scalability and maintainability.</li>
                        <li>Participated in thorough code reviews to ensure high code quality and adherence to best practices.</li>
                        <li>Worked with Tailwind and Bootstrap for responsive UI/UX design, enhancing the visual appeal of client-facing applications.</li>
                        <li>Contributed to the development of Git-based version control workflows to streamline project management.</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
