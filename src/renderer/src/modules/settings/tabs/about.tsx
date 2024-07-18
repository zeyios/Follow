import { license, repository } from "@pkg"
import { Logo } from "@renderer/components/icons/logo"
import { StyledButton } from "@renderer/components/ui/button"

export const SettingAbout = () => (
  <div>
    <section className="mt-4">
      <div className="flex gap-3">
        <Logo className="size-[52px]" />

        <div className="flex grow flex-col">
          <div className="text-lg font-bold">
            {APP_NAME}
            {" "}
            {!import.meta.env.PROD ? `(${import.meta.env.MODE})` : ""}
          </div>
          <div>
            <span className="rounded bg-muted px-2 py-1 text-xs">
              {APP_VERSION}
            </span>
          </div>
        </div>

        <div className="shrink-0">
          <StyledButton
            variant="outline"
            onClick={() => {
              window.open(`${repository.url}/releases`, "_blank")
            }}
          >
            Changelog
          </StyledButton>
        </div>
      </div>

      <p className="mt-3 text-balance text-sm">
        {APP_NAME}
        {" "}
        is a free and open-source project. It is licensed under the
        {" "}
        {license}
        {" "}
        License.
      </p>

      <p className="mt-3 text-sm">
        {APP_NAME}
        {" "}
        (
        {GIT_COMMIT_SHA.slice(0, 7).toUpperCase()}
        )
        {" "}
        currently early in development. If you have any feedback or
        suggestions, please feel free to
        {" "}
        <a className="inline-flex cursor-pointer items-center gap-1 hover:underline" href={`${repository.url}/issues/new`} target="_blank">
          open an issue
          {" "}
          <i className="i-mgc-external-link-cute-re" />
        </a>
        {" "}
        on the GitHub.
      </p>
    </section>
  </div>
)