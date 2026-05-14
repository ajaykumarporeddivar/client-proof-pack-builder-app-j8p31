'use client'
import { } from 'reactexport default function Error error, reset }: { error: Error { digest?: string }; reset: () => void }) {
 (() => { console.error(error) }, [error  return (
    < className="min-h-screen flex items justify-center bg-zinc50">
      <div="text-center max-w-md p-8">
        <div classNamew-16 h-16 bg-red-100 rounded2xl flex items-center justify text-2xl mx-auto mb-6">⚠</div>
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">Something went wrong</h2>
        <p className="text-zinc-500 mb-8 text-sm leading-relaxed">{error.message || 'An unexpected error occurred.'}</p>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="px-6 py-2.5 bg-zinc-900 text-white rounded-xl text-sm font-semibold hover:bg-zinc-700 transition-colors">Try again</button>
          <a href="/" className="px-6 py-2.5 border border-zinc-200 rounded-xl text-sm font-semibold hover:bg-zinc-50 transition-colors">Go home</a>
        </div>
      </div>
    </div>
  )
}