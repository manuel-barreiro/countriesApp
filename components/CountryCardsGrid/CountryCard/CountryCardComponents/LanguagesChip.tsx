
function LanguageChip({language}: {language: string}) {
  return (
    <button className="bg-languageChipBlue rounded-full w-auto py-1 px-2 font-openSans text-[14px] font-semibold">
      {language}
    </button>
  )
}

export default LanguageChip