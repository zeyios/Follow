import { FeedIcon } from "@renderer/components/feed-icon"
import dayjs from "@renderer/lib/dayjs"
import { useEntry } from "@renderer/store/entry"

import { ReactVirtuosoItemPlaceholder } from "../ui/placeholder"
import type { UniversalItemProps } from "./types"

export function NotificationItem({ entryId, entryPreview }: UniversalItemProps) {
  const entry = useEntry(entryId) || entryPreview
  if (!entry) return <ReactVirtuosoItemPlaceholder />
  return (
    <div className="flex px-2 pt-3 pb-8">
      <FeedIcon feed={entry.feeds} />
      <div className="-mt-0.5 line-clamp-5 flex-1 text-sm leading-tight">
        <div className="space-x-1 text-[10px] text-zinc-500">
          <span>{entry.feeds.title}</span>
          <span>·</span>
          <span>
            {dayjs
              .duration(
                dayjs(entry.entries.publishedAt).diff(dayjs(), "minute"),
                "minute",
              )
              .humanize()}
          </span>
        </div>
        <div className="my-0.5">{entry.entries.title}</div>
      </div>
    </div>
  )
}
