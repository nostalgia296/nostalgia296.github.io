<script lang="ts">
	interface FriendLink {
		name: string;
		description: string;
		url: string;
		avatar: string;
	}

	let {
		friendLinks = [],
		enabled = true,
	}: {
		friendLinks?: FriendLink[];
		enabled?: boolean;
	} = $props();
</script>

{#if enabled && friendLinks.length > 0}
	<div class="space-y-4">
		{#each friendLinks as friend (friend.url)}
			<a
				href={friend.url}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-start gap-4 p-4 rounded-[var(--radius-large)] bg-[var(--card-bg)] hover:bg-[var(--btn-card-bg-hover)] active:bg-[var(--btn-card-bg-active)] transition group"
			>
				<img
					src={friend.avatar}
					alt={friend.name}
					class="w-16 h-16 rounded-xl object-cover transition flex-shrink-0"
				/>
				<div class="flex-1 min-w-0">
					<div
						class="font-semibold text-lg text-[var(--title-color)] transition mb-1"
					>
						{friend.name}
					</div>
					<div class="text-sm text-[var(--meta-color)] leading-relaxed">
						{friend.description}
					</div>
				</div>
				<div
					class="opacity-0 group-hover:opacity-100 transition text-[var(--primary)] flex-shrink-0 mt-1"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
				</div>
			</a>
		{/each}
	</div>
{:else if enabled}
	<div class="card-base p-8 text-center">
		<div class="text-[var(--meta-color)]">
			暂无友链
		</div>
	</div>
{/if}
