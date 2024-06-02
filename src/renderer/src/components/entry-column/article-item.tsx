import { FeedIcon } from "@renderer/components/feed-icon"
import { Image } from "@renderer/components/ui/image"
import dayjs from "@renderer/lib/dayjs"
import { cn } from "@renderer/lib/utils"
import { useEntry } from "@renderer/store/entry"

import { ReactVirtuosoItemPlaceholder } from "../ui/placeholder"
import type { UniversalItemProps } from "./types"

export function ArticleItem({ entryId, entryPreview }: UniversalItemProps) {
  const entry = useEntry(entryId) || entryPreview

  // NOTE: prevent 0 height element, react virtuoso will not stop render any more
  if (!entry) return <ReactVirtuosoItemPlaceholder />

  return (
    <div className="pb-8 flex px-2 pt-3">
      <FeedIcon feed={entry.feeds} />
      <div className="-mt-0.5 line-clamp-5 flex-1 text-sm leading-tight">
        <div className={cn("flex gap-1 text-[10px] font-bold", entry.read ? "text-zinc-400" : "text-zinc-500")}>
          <span className="truncate">{entry.feeds.title}</span>
          <span>·</span>
          <span className="shrink-0">
            {dayjs
              .duration(
                dayjs(entry.entries.publishedAt).diff(dayjs(), "minute"),
                "minute",
              )
              .humanize()}
          </span>
        </div>
        <div className="my-0.5 break-words font-medium">
          {entry.entries.title}
        </div>
        <div className={cn("text-[13px]", entry.read ? "text-zinc-400" : "text-zinc-500")}>
          {entry.entries.description}
        </div>
      </div>
      {entry.entries.images?.[0] && (
        <Image
          src={entry.entries.images[0]}
          className="ml-2 size-20 shrink-0"
          loading="lazy"
          proxy={{
            width: 160,
            height: 160,
          }}
        />
      )}
    </div>
  )
}
