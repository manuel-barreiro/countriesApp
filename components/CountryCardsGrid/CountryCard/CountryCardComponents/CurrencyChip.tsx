
function CurrencyChip({currency}: {currency: string}) {
  return (
    <button className="bg-currencyChipCyan rounded-full w-auto py-1 px-2 font-openSans text-[14px] font-semibold">
      {currency}
    </button>
  )
}

export default CurrencyChip