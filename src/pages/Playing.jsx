// ❗️ YOU'RE STUCK DOING THE FRONTEND FIRST AGAIN.
// GO BACK AND TO THE BACKEND WITH PURE HTML COMPONENTS : SIMPLE BTNS, SIMPLE CONTAINER WITH TEXT

export default function Playing() {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center bg-green-200">
            {/* Quote Component */}
            <div className="pb-5">
                <p>@ ______</p>
                <h2 className="text-2xl font-bold">I watch Bladerunner on repeat</h2>
            </div>
            {/* Buttons */}
            <div className="flex flex-col items-center"> 
                <p className="pb-2">This quote was written by:</p>
                <div className='flex'>
                    <button type="button" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Kanye</button>
                    <div className="px-2"></div>
                    <button type="button" class="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">AI</button>
                </div>
            </div>
        </div>
    )
}