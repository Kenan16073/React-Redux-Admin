

export function ErrorMessage({errorMessage}) {
    return (
        <div className="p-4 mb-4 mt-5 text-sm text-red-800 rounded-lg bg-red-50 text-center dark:bg-white-800 dark:text-red-400" role="alert">
            {errorMessage}
        </div>
    )
}
