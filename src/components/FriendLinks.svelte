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
				class="group flex items-center gap-4 p-4 rounded-[var(--radius-large)] bg-[var(--card-bg)] hover:bg-[var(--btn-card-bg-hover)] active:bg-[var(--btn-card-bg-active)] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
			>
				<div 
					class="w-12 h-12 rounded-xl flex-shrink-0 overflow-hidden transition-all duration-300 group-hover:scale-110 bg-[var(--btn-card-bg-hover)]"
				>
					<img
						src={friend.avatar}
						alt={friend.name}
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="flex-1 min-w-0">
					<div
						class="font-semibold text-base text-[var(--title-color)] transition-colors group-hover:text-[var(--primary)]"
					>
						{friend.name}
					</div>
					<div class="text-xs text-[var(--meta-color)] leading-relaxed mt-0.5">
						{friend.description}
					</div>
				</div>
				<div
					class="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[var(--primary)] flex-shrink-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-4 h-4"
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