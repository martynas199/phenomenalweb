import React from 'react'

export default function Footer(){
  return (
    <footer className="px-8 md:px-20 py-10 border-t border-white/5 text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h4 className="text-lg font-semibold">Phenomenal Web</h4>
          <p className="text-sm">Building delightful web experiences.</p>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Phenomenal Web. All rights reserved.</p>
      </div>
    </footer>
  )
}